import React, { useState } from "react";
import type { Route } from "./_types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Eslam" },
    { name: "description", content: "Get in touch with Eslam for mathematics tutoring" },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-blue-800 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
          تواصل معي
        </h1>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            معلومات التواصل
          </h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
<p>
  البريد الإلكتروني:{" "}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=e.faras12@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    e.faras12@gmail.com
  </a>
</p>

<p>
  رقم الهاتف:{" "}
  <a
    href="https://wa.me/201095682795"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    +201095682795
  </a>
</p>

<p>العنوان: القاهرة، مصر</p>

          </div>
        </div>
      </div>
    </div>
  );
}