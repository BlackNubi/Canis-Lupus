type PrototypeFrameProps = {
  title: string;
  src: string;
};

/**
 * Same-origin compatibility wrapper for the current interactive hub prototypes.
 * Keep the frame unsandboxed while these documents rely on inline scripts and
 * shared localStorage. New features belong in App Router React components.
 */
export function PrototypeFrame({ title, src }: PrototypeFrameProps) {
  return (
    <main className="prototype-stage">
      <iframe
        className="prototype-stage__frame"
        title={title}
        src={src}
        loading="eager"
        referrerPolicy="same-origin"
      />
    </main>
  );
}
