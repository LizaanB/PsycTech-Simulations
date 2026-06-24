import test from "node:test";
import assert from "node:assert/strict";
import { comparePassword, hashPassword, signToken, verifyToken } from "../src/auth.mjs";

test("hashPassword and comparePassword work", async () => {
  const password = "SuperSafe123";
  const hash = await hashPassword(password);
  const valid = await comparePassword(password, hash);
  assert.equal(valid, true);
});

test("signToken and verifyToken round-trip payload", () => {
  const token = signToken({ email: "demo@example.com", role: "client" });
  const payload = verifyToken(token);
  assert.equal(payload.email, "demo@example.com");
  assert.equal(payload.role, "client");
});
