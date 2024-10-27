<script>
  import "../app.css";

  import Loader from '../components/loader.svelte';
  import Navbar from "../components/navbar.svelte";
  import ScrollToTop from "../components/scroll_top.svelte"
  import Footer from "../components/footer.svelte"
</script>

<Loader />
<Navbar />
<ScrollToTop />

<slot />

<Footer />