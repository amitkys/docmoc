import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col">
      <p>we have not posted any blog yet</p>
      <Link className="underline text-sm text-fd-foreground/75" href={"/"}>Back to home page</Link>
    </div>
  )
}