"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";

const videos = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

type Video = (typeof videos)[0];

function VideoThumbnail({ video, onPlay }: { video: Video; onPlay: () => void }) {
  return (
    <button
      onClick={onPlay}
      className="relative aspect-9/16 overflow-hidden group cursor-pointer w-full bg-black"
      aria-label={`Lire la vidéo ${video.id}`}
    >
      {/* Cover — visible immédiatement, lazy chargement natif du navigateur */}
      <Image
        src="/images/phenomenedeforce.jpg"
        alt={`Cover vidéo ${video.id}`}
        fill
        loading="lazy"
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-300" />

      {/* Numéro */}
      <span className="absolute top-3 left-3 font-title text-white/60 text-xs tracking-widest z-10">
        0{video.id}
      </span>

      {/* Ligne orange au hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

      {/* Play button — centré, toujours visible */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-14 h-14 border-2 border-white/70 group-hover:border-primary flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
          <HugeiconsIcon icon={PlayIcon} size={22} color="#FF4500" />
        </div>
      </div>
    </button>
  );
}

// Player — affiche la cover avec play, lance la vidéo au clic
function VideoPlayer({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const [coverError, setCoverError] = useState(false);

  if (playing) {
    return (
      <video
        src={`/videos/${video.id}.mp4`}
        controls
        autoPlay
        playsInline
        preload="none"
        className="w-full max-h-[80vh] bg-black block"
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full aspect-video flex items-center justify-center group overflow-hidden bg-black"
      aria-label="Lancer la vidéo"
    >
      {/* Cover */}
      {!coverError ? (
        <Image
          src={`/images/phenomenedeforce.jpg`}
          alt="Cover vidéo"
          fill
          className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
          onError={() => setCoverError(true)}
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-900" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Gros bouton play centré */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-20 h-20 border-2 border-white/80 group-hover:border-primary flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
          <HugeiconsIcon icon={PlayIcon} size={36} color="#FF4500" />
        </div>
        <span className="font-body text-white/70 text-xs tracking-widest uppercase">
          Lancer la vidéo
        </span>
      </div>
    </button>
  );
}

export function PowerGridSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState<Video | null>(null);

  function openVideo(v: Video) {
    setSelected(v);
    onOpen();
  }

  function handleClose() {
    onClose();
    setTimeout(() => setSelected(null), 300);
  }

  return (
    <>
      <section className="relative bg-background py-16 md:py-24 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-body text-primary text-xs tracking-[0.4em] uppercase mb-4">
              Le coach en action
            </p>
            <h2 className="font-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white mb-4 italic">
              LA FORCE EN{" "}
              <span className="text-primary">MOUVEMENT</span>
            </h2>
            <p className="font-body text-secondary italic max-w-xl mx-auto">
              Pas de studio, pas de mise en scène. Juste de la sueur, de la discipline et des résultats.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-white/5 p-1">
            {videos.map((v) => (
              <VideoThumbnail key={v.id} video={v} onPlay={() => openVideo(v)} />
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="2xl"
        backdrop="blur"
        classNames={{
          base: "bg-black border border-white/10 rounded-none",
          backdrop: "bg-black/90",
          closeButton: "text-white hover:text-primary z-10",
          body: "p-0",
        }}
      >
        <ModalContent>
          <ModalBody>
            {selected && <VideoPlayer video={selected} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
