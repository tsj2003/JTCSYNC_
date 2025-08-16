import { describe, it, expect } from 'vitest';
import { useCall } from '@stream-io/video-react-sdk';

describe('Video Call', () => {
  it('should initialize video call', () => {
    const call = useCall();
    expect(call).toBeDefined();
  });

  it('should handle camera and microphone controls', () => {
    const call = useCall();
    expect(call?.camera).toBeDefined();
    expect(call?.microphone).toBeDefined();
  });

  it('should handle screen sharing', () => {
    const call = useCall();
    expect(call?.screenShare).toBeDefined();
  });

  it('should handle recording', () => {
    const call = useCall();
    expect(call?.recording).toBeDefined();
  });
}); 