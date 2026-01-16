"use client";

import { useEffect, useState } from "react";

export default function ApiTest() {
  const [apiUrl, setApiUrl] = useState("");
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get the API URL from environment
    const url = process.env.NEXT_PUBLIC_API_URL || "NOT SET";
    setApiUrl(url);
  }, []);

  const testApi = async () => {
    setLoading(true);
    setTestResult(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/products`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setTestResult({
        success: true,
        status: response.status,
        productsCount: data.products?.length || 0,
        data: data
      });
    } catch (error) {
      setTestResult({
        success: false,
        error: error.message,
        details: error.toString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            API Connection Test
          </h1>

          {/* Environment Variable Status */}
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
              Environment Variable
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              NEXT_PUBLIC_API_URL:
            </p>
            <code className="block p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">
              {apiUrl}
            </code>
            {apiUrl === "NOT SET" && (
              <p className="mt-2 text-red-600 dark:text-red-400 text-sm">
                ⚠️ Environment variable is not set! Set NEXT_PUBLIC_API_URL in Vercel.
              </p>
            )}
          </div>

          {/* Test Button */}
          <button
            onClick={testApi}
            disabled={loading}
            className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {loading ? "Testing Connection..." : "Test API Connection"}
          </button>

          {/* Test Results */}
          {testResult && (
            <div className={`p-6 rounded-lg border ${
              testResult.success 
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                testResult.success 
                  ? "text-green-900 dark:text-green-300"
                  : "text-red-900 dark:text-red-300"
              }`}>
                {testResult.success ? "✅ Success!" : "❌ Failed"}
              </h2>

              {testResult.success ? (
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Status:</strong> {testResult.status}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Products Found:</strong> {testResult.productsCount}
                  </p>
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-gray-700 dark:text-gray-300">
                      View Response Data
                    </summary>
                    <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-700 rounded text-xs overflow-auto max-h-96">
                      {JSON.stringify(testResult.data, null, 2)}
                    </pre>
                  </details>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-red-700 dark:text-red-300">
                    <strong>Error:</strong> {testResult.error}
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-4">
                    <strong>Common Issues:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400 space-y-1">
                    <li>API server is not running or not accessible from the internet</li>
                    <li>CORS is not configured on the API server</li>
                    <li>API URL is incorrect in environment variables</li>
                    <li>Network/firewall blocking the request</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Deployment Checklist
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Set <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">NEXT_PUBLIC_API_URL</code> in Vercel environment variables</li>
              <li>Ensure your API server is accessible from the internet (not localhost)</li>
              <li>Configure CORS on your API to allow requests from your Vercel domain</li>
              <li>Redeploy your Vercel app after setting environment variables</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
