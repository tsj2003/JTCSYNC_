/**
 * Utility functions for meeting-related operations
 */

/**
 * Generates a meeting link with the correct port
 * @param meetingId - The meeting ID
 * @returns The complete meeting URL
 */
export const generateMeetingLink = (meetingId: string): string => {
  // Get the current origin - use it as is for both development and production
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  
  // Use the current origin directly without port manipulation
  // This works for both development (localhost:3000, localhost:3001) and production
  return `${currentOrigin}/meeting/${meetingId}`;
};

/**
 * Ensures camera and microphone are properly disabled
 * @param call - The Stream call object
 */
export const cleanupMediaDevices = async (call: any) => {
  if (!call) return;
  
  try {
    // Disable camera
    if (call.camera) {
      await call.camera.disable();
    }
    
    // Disable microphone
    if (call.microphone) {
      await call.microphone.disable();
    }
  } catch (error) {
    console.error('Error cleaning up media devices:', error);
  }
};

/**
 * Formats meeting duration
 * @param startTime - Meeting start time
 * @param endTime - Meeting end time (optional)
 * @returns Formatted duration string
 */
export const formatMeetingDuration = (startTime: Date, endTime?: Date): string => {
  const start = new Date(startTime);
  const end = endTime ? new Date(endTime) : new Date();
  
  const durationMs = end.getTime() - start.getTime();
  const minutes = Math.floor(durationMs / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  }
  
  return `${minutes}m`;
};
