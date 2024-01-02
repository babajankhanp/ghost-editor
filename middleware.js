import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/health'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/trpc(.*)'],
};