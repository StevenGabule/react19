type SoundfontType = typeof SoundFont;
type AudioContextType = typeof AudioContext;

// Extend the global Window interface
interface Window {
	webkitAudioContext: AudioContextType;
}