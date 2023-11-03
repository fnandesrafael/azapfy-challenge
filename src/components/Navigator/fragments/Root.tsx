import React from 'react';

type NavigatorProps = {
  children: React.ReactNode;
};

export default function Navigator({ children }: NavigatorProps) {
  return (
    <header className="flex w-full flex-row justify-end p-4 md:p-4 md:px-12">
      {children}
    </header>
  );
}
