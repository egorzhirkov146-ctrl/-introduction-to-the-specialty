FROM node:18-alpine AS builder

WORKDIR /app

COPY backend/package*.json ./backend/

RUN cd backend && npm ci --only=production

FROM node:18-alpine

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /app

COPY --from=builder --chown=nodejs:nodejs /app/backend/node_modules ./backend/node_modules

COPY --chown=nodejs:nodejs backend ./backend
COPY --chown=nodejs:nodejs frontend ./frontend

USER nodejs

EXPOSE 3000

CMD ["node", "backend/server.js"]
