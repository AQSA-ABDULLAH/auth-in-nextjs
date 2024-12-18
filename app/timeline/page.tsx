
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);

  await wait(1000);

  return (
    <>
      {session?.user?.image && <img src={session?.user?.image} alt="" />}
      <h3>This is your timeline: {session?.user?.email}</h3>
    </>
  );
}
