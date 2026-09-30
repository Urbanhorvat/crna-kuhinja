import { useEffect, useState } from 'react';

const POSTER_SRC =
  'https://storage.helloreaddy.io/project_files/e6684ce1-c10c-4346-8152-f86ec028bfa7/2110e085-0594-4b2b-998d-f2113ebd1cf0_compressed_IMG_3023.webp';

const SHOW_MS = 2000;
const FADE_MS = 500;

/**
 * Opening splash: shows the upcoming "Back to Roots" event poster full-screen
 * for a couple of seconds when the site is opened, then fades away.
 */
export default function EventSplash() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startFade = window.setTimeout(() => setLeaving(true), SHOW_MS);
    const unmount = window.setTimeout(() => setMounted(false), SHOW_MS + FADE_MS);
    return () => {
      window.clearTimeout(startFade);
      window.clearTimeout(unmount);
    };
  }, []);

  const dismiss = () => {
    setLeaving(true);
    window.setTimeout(() => setMounted(false), FADE_MS);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Prihajajoči dogodek: Back to Roots"
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background-950/95 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src={POSTER_SRC}
        alt="Back to Roots – večer lokalnih okusov, 10. oktober ob 18:00, Vinski Vrh 6, cena menija 85 € na osebo"
        title="Back to Roots – dogodek v Črni Kuhni"
        className="max-h-[92vh] max-w-[94vw] rounded-lg object-contain"
      />
    </div>
  );
}