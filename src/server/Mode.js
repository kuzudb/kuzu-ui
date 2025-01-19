const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const MODES = require("./utils/Constants").MODES;

const isWasmMode = process.env.KUZU_WASM &&
  process.env.KUZU_WASM.toLowerCase() === "true";

router.get("/", async (_, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  try {
    if (isWasmMode) {
      return res.send({
        mode: MODES.WASM,
        isProduction,
      });
    }
    const mode = database.getAccessModeString();
    res.send({
      mode,
      isProduction,
    });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
