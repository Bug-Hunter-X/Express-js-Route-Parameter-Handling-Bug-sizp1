# Express.js Route Parameter Handling Bug

This repository demonstrates a common bug in Express.js related to handling route parameters. The bug occurs when a route parameter is missing or has an unexpected format, leading to unexpected behavior.

## Bug Description

The provided code uses `req.params.id` to access a route parameter.  If the parameter is missing or is not a valid integer, the server might not handle this gracefully.

## Solution

The solution involves using explicit type validation to check `req.params.id`.  It uses a middleware function to handle missing or invalid parameters and return an appropriate error message.