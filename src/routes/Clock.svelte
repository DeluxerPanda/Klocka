<script>
    import { onMount } from 'svelte';
    let date = new Date().toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    onMount(() => {
      const interval = setInterval(() => {
        date = new Date().toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }, 1000);
      return () => clearInterval(interval);
    });
  </script>

<svelte:head>
  <title>Start Page - {date}</title> 
</svelte:head>

  <section>
    <p class="clockDisplay">
      {date}
    </p>
  </section>

  <style>
    section, .clockDisplay {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
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
      background-color: rgba(23, 29, 37, 0.444);
      font-size: 10vw;
      padding-inline: 25px;
      font-weight: bolder;
      border-radius: 15px;
      color: #ffffff;

    }
  </style>