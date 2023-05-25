import { onMounted, onUnmounted, ref } from "vue";

const calcMobile = (windowWidth) => windowWidth <= 600;

export default function useScreenType() {
  const isMobile = ref(false);
  const isDesktop = ref(true);

  const resize = () => {
    isMobile.value = calcMobile(window.innerWidth);
    isDesktop.value = !isMobile.value;
  };

  onMounted(() => {
    resize();
    window.addEventListener("resize", resize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return { isMobile, isDesktop };
}
