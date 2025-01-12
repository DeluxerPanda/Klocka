<script>
    import { onMount } from 'svelte';

    import Day_jpg from '$lib/assets/Day/87fd4f413d9ad44e19cd2876a48e25b4025dce74.jpg';
    import Day_webm from '$lib/assets/Day/85882f90ad8ca69467610883a9fa95ecc2f071ab.webm';
    import Day_mp4 from '$lib/assets/Day/4f3b30e2e72655a8eb948bd9d3ba66a30681a6b9.mp4';

    import Night_jpg from '$lib/assets/Night/386c658bc267ea1a1973abd8f40990d66233caae.jpg';
    import Night_webm from '$lib/assets/Night/124bf94415accfef96f86cbbe566e42374d53b76.webm';
    import Night_mp4 from '$lib/assets/Night/8df64a76003112a9480cf2c116a88c2b841cc44f.mp4';

    const hours = new Date().getHours();
    let isDayTime = hours > 6 && hours < 20;
    
    onMount(() => {
      const interval = setInterval(() => {
        const newHours = new Date().getHours();
        isDayTime = newHours > 6 && newHours < 20;
      }, 1000);
      return () => clearInterval(interval);
    });
  </script>
  
  <style>
    video {
    width: 100vw;
   height: 100vh;
   object-fit: cover;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: -1;
    }
  </style>
  
    {#if isDayTime}
<video 
  playsinline 
  autoplay 
  muted 
  loop 
  poster={Day_jpg}>
  <source src={Day_webm} type="video/webm">
  <source src={Day_mp4} type="video/mp4">
</video>
  {:else}
  <video 
  playsinline 
  autoplay 
  muted 
  loop 
  poster={Night_jpg}>
  <source src={Night_webm} type="video/webm">
  <source src={Night_mp4} type="video/mp4">
</video>
{/if}
  