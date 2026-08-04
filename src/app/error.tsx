'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="text-3xl text-zinc-400 mb-2">Notice</div>
      <h2 className="text-lg font-light uppercase tracking-widest text-white mb-2">Cart System Error</h2>
      <p className="text-zinc-500 text-xs max-w-md mb-6">
        An error occurred during inventory synchronization or order placement.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs rounded-none transition-colors uppercase tracking-widest"
      >
        Retry Checkout Procedure
      </button>
    </div>
  );
}
