<?php
declare(strict_types=1);

const RECIPIENT_EMAIL = 'contact@provence-compta.com';
const RECIPIENT_NAME = 'Provence Compta';
const FROM_EMAIL = 'contact@provence-compta.com';

function wants_json(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    return strpos($accept, 'application/json') !== false;
}

function respond(bool $ok, string $message, int $status = 200): never
{
    http_response_code($status);

    if (wants_json()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $target = '/contact/?sent=' . ($ok ? '1' : '0') . '#formulaire-contact';
    header('Location: ' . $target, true, 303);
    exit;
}

function field(string $name, int $maxLength = 2000): string
{
    $value = $_POST[$name] ?? '';
    if (!is_string($value)) {
        return '';
    }

    $value = trim(strip_tags($value));
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function header_value(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Méthode non autorisée.', 405);
}

if (field('website', 300) !== '') {
    respond(true, 'Demande envoyée.');
}

$lastName = field('lastName', 120);
$firstName = field('firstName', 120);
$phone = field('phone', 60);
$email = field('email', 180);
$subject = field('subject', 180);
$message = field('message', 4000);
$consent = field('consent', 10);

if ($lastName === '' || $phone === '' || $email === '' || $message === '' || $consent !== '1') {
    respond(false, 'Merci de compléter les champs obligatoires.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Adresse email invalide.', 422);
}

$fullName = trim($firstName . ' ' . $lastName);
$safeName = header_value($fullName !== '' ? $fullName : $lastName);
$safeEmail = header_value($email);
$safeSubject = header_value($subject !== '' ? $subject : 'Demande via le site Provence Compta');

$mailSubject = '[Provence Compta] ' . $safeSubject;
$mailBody = implode("\n", [
    'Nouvelle demande depuis le site Provence Compta',
    '',
    'Nom : ' . $fullName,
    'Téléphone : ' . $phone,
    'Email : ' . $email,
    'Objet : ' . ($subject !== '' ? $subject : 'Non renseigné'),
    '',
    'Message :',
    $message,
    '',
    'Consentement : accepté',
    'Date : ' . date('Y-m-d H:i:s'),
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . RECIPIENT_NAME . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(RECIPIENT_EMAIL, $mailSubject, $mailBody, implode("\r\n", $headers));

if (!$sent) {
    respond(false, "L'envoi du message a échoué.", 500);
}

respond(true, 'Demande envoyée.');
