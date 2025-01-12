<script>
    import { onMount } from 'svelte';
    
    let date = new Date().toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const hours = new Date().getHours();
    let isDayTime = hours > 6 && hours < 20;
    
    onMount(() => {
      const interval = setInterval(() => {
        date = new Date().toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const newHours = new Date().getHours();
        isDayTime = newHours > 6 && newHours < 20;
      }, 1000);
      
      return () => clearInterval(interval);
    });
  </script>
  
  <style>
    section, .clockDisplay {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    section {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      transition: background-image 1s ease-in-out;
    }
  
    .clockDisplay {
      font-size: 10vw;
      font-weight: bolder;
      border-radius: 15px;
      color: #ffffff;
      position: absolute;
    }
  
    video {
      height: 100%;
      width: 177.77777778vh; /* 100 * 16 / 9 */
      min-width: 100%;
      min-height: 56.25vw; /* 100 * 9 / 16 */
    }
    
    footer {
      background-color: #171d25;
      border-radius: 10px;
      padding: 5px;
      color: #ffffff;
      position: absolute;
      right: 1px;
      bottom: 1px;
      font-size: 10px;
  }
  a{
    color: #1a9fff;
  }
  </style>
<svelte:head>
  <title>Start Page - {date}</title> 
</svelte:head>



  <section>
    <p class="clockDisplay">
      {date}
    </p>
    {#if isDayTime}
<video 
  playsinline 
  autoplay 
  muted 
  loop 
  poster='src/lib/assets/Day/87fd4f413d9ad44e19cd2876a48e25b4025dce74.jpg'>
  <source src='src/lib/assets/Day/85882f90ad8ca69467610883a9fa95ecc2f071ab.webm' type="video/webm">
  <source src='src/lib/assets/Day/4f3b30e2e72655a8eb948bd9d3ba66a30681a6b9.mp4' type="video/mp4">
</video>
  {:else}
  <video 
  playsinline 
  autoplay 
  muted 
  loop 
  poster='src/lib/assets/Night/386c658bc267ea1a1973abd8f40990d66233caae.jpg'>
  <source src='src/lib/assets/Night/124bf94415accfef96f86cbbe566e42374d53b76.webm' type="video/webm">
  <source src='src/lib/assets/Night/8df64a76003112a9480cf2c116a88c2b841cc44f.mp4' type="video/mp4">
</video>
{/if}
  </section>
  
  <footer>
    <span id="version">Background images/videos are from</span> <a href="https://store.steampowered.com/">Steam</a>
    </footer>
  