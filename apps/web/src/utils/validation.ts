/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

/**
 * Validates if a phone number is in E.164 format.
 * Format: +<country_code><subscriber_number>
 * Example: +1234567890
 *
 * @param phoneNumber - The phone number to validate.
 * @returns True if the phone number is valid E.164 format, false otherwise.
 */
export function isValidE164PhoneNumber(phoneNumber: string): boolean {
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  return e164Regex.test(phoneNumber);
}
