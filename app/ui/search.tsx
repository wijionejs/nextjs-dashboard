'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  

  const handleSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const queryString = event.target.value;
    const newSearchParams = new URLSearchParams(searchParams);
    if (queryString) {
      newSearchParams.set("query", event.target.value);
    } else {
      newSearchParams.delete("query");
    }

    newSearchParams.set("page", "1");

    replace(`${pathname}?${newSearchParams.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        defaultValue={searchParams.get("query")?.toString()}
        onChange={handleSearch}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
