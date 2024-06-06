import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-black rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1>Welcome Back</h1>
        </div>
      </Header>
    </div>
  );
}
