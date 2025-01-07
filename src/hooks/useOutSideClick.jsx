import { useEffect } from 'react';

function useOutsideClick(
  ref,
  callback
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        event.target&&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    }

    function escKey(e) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keyup', escKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', escKey);
    };
  }, [ref, callback]);
}
export default useOutsideClick;