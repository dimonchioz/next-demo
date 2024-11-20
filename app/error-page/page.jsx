"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Error() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const message = searchParams.get("message");

  const handleRetry = () => {
    router.back();
  };

  return (
    <div className="fixed top-0 flex justify-center items-center w-full min-h-screen z-10">
      <div className="flex flex-col items-center gap-2 w-full text-center p-12 bg-red-100 text-red-800 border border-red-200 rounded-lg m-5 font-varela">
        <h1 className="text-3xl font-bold">Something Went Wrong</h1>
        <p>{message}</p>
        <button
          className="border border-primary rounded-lg px-5 py-2 w-fit bg-primary text-white font-medium"
          onClick={handleRetry}
        >
          Retry
        </button>
      </div>
    </div>
  );
}
