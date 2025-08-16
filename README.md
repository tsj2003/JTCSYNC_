# Remote Interview Platform

A full-stack remote interview platform built with Next.js 14, featuring real-time video conferencing, screen sharing, and recording capabilities.

## Features

- 🎥 Real-time video conferencing
- 🖥️ Screen sharing
- 🎬 Screen recording
- 🔒 Secure authentication with Clerk
- 📅 Interview scheduling
- 👥 Role-based access (Interviewer/Candidate)
- 💻 Code editor integration
- 🎨 Modern UI with Tailwind CSS & Shadcn UI

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Convex (Real-time database)
- **Authentication:** Clerk
- **Video:** Stream API
- **Code Editor:** Monaco Editor

## Prerequisites

- Node.js 18+ and npm
- Clerk account and API keys
- Stream API account and keys
- Convex account and deployment

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd remote-interview-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Meeting Links & Camera Management

### 🔗 **Meeting Links**
- **Correct Format**: `http://localhost:3000/meeting/{meeting-id}`
- **Port**: Always use port **3000** (not 3001)
- **Sharing**: Use the "Share" button in the meeting room to get the correct link
- **Access**: Anyone with the link can join the meeting (if they have access)

### 📹 **Camera & Microphone**
- **Auto-cleanup**: Camera and microphone automatically disable when leaving meetings
- **Manual Control**: Use the toggle switches in meeting setup to control devices
- **Permissions**: Grant camera/microphone permissions when prompted
- **Troubleshooting**: If camera doesn't stop, refresh the page or check browser permissions

### 🎯 **Best Practices**
- **Test Devices**: Always test camera/microphone before joining interviews
- **Share Links**: Use the built-in share functionality for consistent URLs
- **Clean Exit**: Use the "End Meeting" button to properly close sessions
- **Browser Support**: Use Chrome, Firefox, or Safari for best compatibility

## Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Testing

Run the linter:
```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
