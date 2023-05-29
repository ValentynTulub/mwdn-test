import { registerAs } from '@nestjs/config';
import * as process from "process";

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  port: process.env.SERVER_PORT || 3000,
  allowedOrigins: process.env.CORS_ALLOWED_ORIGINS || 'http://localhost:3001'
}));
