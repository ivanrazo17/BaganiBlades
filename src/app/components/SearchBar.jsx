import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className='relative w-full px-4'>
            {/* Container for input and button */}
            <div className='relative flex items-center'>
                {/* Search Input */}
                <input
                    type="search"
                    placeholder="Search for products or custom designs"
                    className={`w-full border rounded-l-md px-4 py-2 pr-12 md:pr-20 transition-colors duration-300 focus:border-custom-purple focus:outline-none ${isFocused ? 'border-custom-purple' : 'border-gray-300'}`}
                    style={{ height: '40px' }} // Ensure correct height
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {/* Search Button */}
                <button
                    className={`absolute right-0 top-0 bottom-0 flex items-center justify-center rounded-none px-4 py-2 transition-colors duration-300 ${isFocused ? 'bg-custom-purple text-white' : 'bg-black text-white'}`}
                    style={{ width: '3rem', height: '40px' }}
                >
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
