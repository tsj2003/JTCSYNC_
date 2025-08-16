import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Clerk
vi.mock('@clerk/nextjs', () => ({
  useUser: () => ({
    user: {
      id: 'test-user-id',
      firstName: 'Test',
      lastName: 'User',
      role: 'interviewer',
    },
    isLoaded: true,
  }),
}));

// Mock Stream Video
vi.mock('@stream-io/video-react-sdk', () => ({
  useCall: () => ({
    id: 'test-call-id',
    camera: {
      enable: vi.fn(),
      disable: vi.fn(),
    },
    microphone: {
      enable: vi.fn(),
      disable: vi.fn(),
    },
    screenShare: {
      start: vi.fn(),
      stop: vi.fn(),
    },
    recording: {
      start: vi.fn(),
      stop: vi.fn(),
    },
  }),
}));

// Mock Convex
vi.mock('convex/react', () => ({
  useQuery: vi.fn(),
  useMutation: vi.fn(),
})); 