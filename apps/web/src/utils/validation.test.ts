/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { expect, test, describe } from "vitest";
import { isValidE164PhoneNumber } from "./validation";

describe("isValidE164PhoneNumber", () => {
  test("should return true for valid E.164 phone numbers", () => {
    expect(isValidE164PhoneNumber("+1234567890")).toBe(true);
    expect(isValidE164PhoneNumber("+5491155555555")).toBe(true);
    expect(isValidE164PhoneNumber("+14155552671")).toBe(true);
  });

  test("should return false for invalid phone numbers", () => {
    expect(isValidE164PhoneNumber("1234567890")).toBe(false); // Missing +
    expect(isValidE164PhoneNumber("+")).toBe(false); // Only +
    expect(isValidE164PhoneNumber("+1")).toBe(false); // Too short
    expect(isValidE164PhoneNumber("+1234567890123456")).toBe(false); // Too long
    expect(isValidE164PhoneNumber("invalid")).toBe(false); // Not a number
    expect(isValidE164PhoneNumber("")).toBe(false); // Empty string
  });

  test("should return false for non-string inputs", () => {
    expect(isValidE164PhoneNumber(1234567890)).toBe(false);
    expect(isValidE164PhoneNumber(null)).toBe(false);
    expect(isValidE164PhoneNumber(undefined)).toBe(false);
    expect(isValidE164PhoneNumber({})).toBe(false);
  });
});
