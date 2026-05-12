import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, CalendarDays, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShowTop = window.scrollY > 400;
      setShowTop(shouldShowTop);

      if (
        window.scrollY > 700 &&
        !sessionStorage.getItem("booking-popup-seen")
      ) {
        sessionStorage.setItem("booking-popup-seen", "1");
        setBookingOpen(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl border-royal/10 bg-white/95 backdrop-blur-xl shadow-deep">
          <DialogHeader className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bright/10 text-bright text-[10px] font-bold uppercase tracking-[0.18em] w-fit mb-3">
              <CalendarDays className="size-3.5" />
              Appointment Booking
            </div>
            <DialogTitle className="text-2xl font-display text-ink">
              Need to book a dental visit?
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-ink/65">
              Tap below to book an appointment instantly. You can confirm on WhatsApp or open the booking page for the full form.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3 rounded-2xl bg-ice p-4 border border-royal/5">
            <p className="text-sm text-ink/70">
              Fastest options:
            </p>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>• WhatsApp confirmation with the clinic team</li>
              <li>• Full appointment form on the booking page</li>
            </ul>
          </div>

          <DialogFooter className="sm:justify-start gap-3 mt-2">
            <a
              href="https://wa.me/919921498104?text=Hi%20Chhaya%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-success text-white font-semibold shadow-[0_12px_30px_rgba(34,197,94,0.25)] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="size-4" />
              Book on WhatsApp
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-royal text-ice font-semibold hover:bg-bright transition-colors"
            >
              <CalendarDays className="size-4" />
              Open Booking Page
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/919921498104?text=Hi%20Chhaya%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex items-center justify-center p-1 sm:p-1.5 rounded-lg bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.55)] hover:-translate-y-1 hover:bg-white/30 transition-all duration-400 cursor-pointer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] drop-shadow-md"
        />
      </a>

      {/* Call — bottom left */}
      <a
        href="tel:+919921498104"
        aria-label="Call clinic"
        className="fixed bottom-5 left-5 z-40 flex items-center justify-center p-1 sm:p-1.5 rounded-lg bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(10,132,255,0.35)] hover:shadow-[0_8px_40px_rgba(10,132,255,0.55)] hover:-translate-y-1 hover:bg-white/30 transition-all duration-400 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] drop-shadow-md">
          <defs>
            <linearGradient id="phoneBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4CA1FF" />
              <stop offset="100%" stopColor="#005BFF" />
            </linearGradient>
          </defs>
          <circle cx="256" cy="256" r="256" fill="url(#phoneBlue)"/>
          <path d="M371 319c-12 0-24-2-35-5a21 21 0 0 0-21 5l-27 27a195 195 0 0 1-89-89l27-27a21 21 0 0 0 5-21 163 163 0 0 1-5-35 22 22 0 0 0-21-21h-43a22 22 0 0 0-22 22 223 223 0 0 0 223 223 22 22 0 0 0 22-22v-43a22 22 0 0 0-21-22z" fill="#fff"/>
        </svg>
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-24 right-5 z-40 size-11 rounded-full bg-white border border-royal/15 text-royal flex items-center justify-center shadow-soft transition-all duration-300 hover:bg-royal hover:text-ice ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="size-4" />
      </button>
    </>
  );
}
