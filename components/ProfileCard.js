import Image from "next/image";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { assetPath } from "@/lib/assets";

function KaggleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 4.5V19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 7.5L9.5 12L16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 10.1L17.7 4.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12.5 13.9L17.7 19.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const socials = [
  { label: "GitHub", icon: Github },
  { label: "Email", icon: Mail }
];

export function ProfileCard() {
  return (
    <section className="glass-surface rounded-card px-5 py-5.5 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-line/90 bg-white/90 p-1 shadow-[0_10px_24px_rgba(74,52,35,0.08)]">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src={assetPath("/ivy-avatar.png")}
            alt="Ivy Ding avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Link
        href="/about"
        className="editorial-title mt-3 block text-[1.55rem] text-ink transition-colors duration-300 hover:text-accent"
      >
        Ivy Ding
      </Link>
      <p className="mt-1 text-[14px] text-muted">Engineering the world</p>
      <p className="mt-1 text-[12px] text-muted/85">数据科学｜AI模型｜统计</p>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {socials.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href="/"
            aria-label={label}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/75 transition-all duration-300 hover:bg-tag hover:text-accent"
          >
            <Icon className="h-4 w-4 stroke-[1.8]" />
          </a>
        ))}
        <a
          href="/"
          aria-label="Kaggle"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink/75 transition-all duration-300 hover:bg-tag hover:text-accent"
        >
          <KaggleIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
