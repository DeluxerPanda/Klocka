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
      
      return () => clearInterval(interval); // Cleanup interval on component unmount
    });
  </script>
  
  <style>
    section, .clockDisplay {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    section {
      height: 100vh;   /* Full height of the viewport */
      width: 100vw;    /* Full width of the viewport */
      overflow: hidden; /* Prevent scrolling */
      position: absolute; /* Ensure it covers the entire screen */
      top: 0;
      left: 0;
      transition: background-image 1s ease-in-out; /* Smooth background transition */
    }
  
    .clockDisplay {
      font-size: 5rem;
      font-weight: bolder;
      border-radius: 15px;
      color: #ffffff;
    }
  
    .daytime {
      background-repeat: no-repeat;
      background-size: cover; /* Ensures the image covers the screen */
      background-position: center; /* Centers the image */
      background-image: url('$lib/assets/87fd4f413d9ad44e19cd2876a48e25b4025dce74.jpg');
    }
  
    .nighttime {
      background-repeat: no-repeat;
      background-size: cover; /* Ensures the image covers the screen */
      background-position: center; /* Centers the image */
      background-image: url('$lib/assets/386c658bc267ea1a1973abd8f40990d66233caae.jpg');
    }
  </style>
  
  <section class={isDayTime ? 'daytime' : 'nighttime'}>
    <p class="clockDisplay">
      {date}
    </p>
  </section>
  