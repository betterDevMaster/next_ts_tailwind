import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Presentation"
          description="Next js is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto min-h-[60vh] max-w-4xl">
          <div className="grid place-items-center px-4 py-16 text-sm font-medium">
            <h2 className="text-2xl font-bold">
              Nextjs + Tailwind CSS + TypeScript
            </h2>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
