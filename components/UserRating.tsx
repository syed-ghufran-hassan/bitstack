import React, { useState } from 'react';

interface UserRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
}

export const UserRating: React.FC<UserRatingProps> = ({ rating, onRate, readonly = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          disabled={readonly}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          className={`text-xl ${
            star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'
          } ${!readonly ? 'hover:text-yellow-400 cursor-pointer' : 'cursor-default'}`}
        >
          ★
        </button>
      ))}
      <span className="text-sm text-gray-600 ml-2">
        {rating > 0 ? `${rating}/5` : 'No rating'}
      </span>
    </div>
  );
};
