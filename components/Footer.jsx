import Link from "next/link";

export default function Footer() {
    return (
      <footer className="py-6 px-1 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">
            &copy; 2025 Vishal Singh All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️ and lots of coffee
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Powered by{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Next.js
            </Link>
          </p>
        </div>
      </footer>
    )
  }