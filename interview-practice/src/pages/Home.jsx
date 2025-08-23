import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  LightBulbIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 p-6 gap-12">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-100 mb-4">
          DSA Notebook
        </h1>
        <p className="text-gray-400 text-lg">
          Practice DSA patterns, explore algorithm history, and simulate
          interview-style problem solving. Designed to help learners master
          coding interviews efficiently.
        </p>
      </section>

      {/* Navigation / Quick Links */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center">
        <Link
          to="/practice"
          className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-2xl p-6 text-center shadow transition"
        >
          <div className="flex justify-center mb-2">
            <CodeBracketIcon className="h-10 w-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Practice Page</h2>
          <p className="text-gray-400">
            Review patterns, see summaries, historical context, and runnable
            code snippets. Perfect for quick revision or low-effort learning
            sessions.
          </p>
        </Link>
        <Link
          to="/interview"
          className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-2xl p-6 text-center shadow transition"
        >
          <div className="flex justify-center mb-2">
            <RocketLaunchIcon className="h-10 w-10 text-pink-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Interview Page</h2>
          <p className="text-gray-400">
            Simulate real interview scenarios with AI guidance: ask clarifying
            questions, explore edge cases, reason brute force to optimized
            solution. Build problem-solving skills step by step.
          </p>
        </Link>
      </section>

      {/* Philosophy / Why this project */}
      <section className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow flex gap-4">
        <LightBulbIcon className="h-10 w-10 text-yellow-400 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            Philosophy
          </h2>
          <p className="text-gray-400 mb-2">
            This platform encourages <strong>active learning</strong> over
            copying solutions. By simulating interview environments and
            structured practice, you learn to think critically and reason
            efficiently.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Master DSA patterns systematically.</li>
            <li>Practice solving problems like in a real interview.</li>
            <li>Fallback option: copy system prompts to practice anywhere.</li>
          </ul>
        </div>
      </section>

      {/* Creators */}
      <section className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow flex gap-4">
        <UserGroupIcon className="h-10 w-10 text-indigo-400 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Creator</h2>
          <p className="text-gray-400 mb-2">
            Developed by Thanus Kumaar to provide a personal tool for mastering
            DSA and interview problem solving.
          </p>
          <p className="text-gray-400">
            Contributions welcome!
            <a
              href="https://github.com/Thanus-Kumaar/DSA-Notebook"
              target="_blank"
              className="text-gray-300 hover:text-white inline-flex items-center ml-1"
            >
              GitHub <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © 2025 DSA Notebook • Built with ❤️ by Thanus Kumaar A.
      </footer>
    </div>
  );
}
