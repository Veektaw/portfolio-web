#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio Website
No dependencies required - uses Python's built-in http.server
"""

import http.server
import socketserver
import os
from pathlib import Path

# Configuration
PORT = int(os.environ.get('PORT', 8000))
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    """Start the HTTP server"""
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔══════════════════════════════════════════════════════════════╗
║                   Portfolio Server Running                   ║
╠══════════════════════════════════════════════════════════════╣
║  🌐 Server Address: http://localhost:{PORT}                    ║
║  📁 Serving from: {str(DIRECTORY)[:40]:<40} ║
║  🛑 Press Ctrl+C to stop the server                          ║
╚══════════════════════════════════════════════════════════════╝
        """)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Server stopped successfully!")
            print("👋 Thanks for viewing the portfolio!\n")

if __name__ == "__main__":
    run_server()
