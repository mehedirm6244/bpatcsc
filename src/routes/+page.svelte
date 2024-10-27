<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import { Newspaper, SquareArrowOutUpRight, GraduationCap, Flower2, Bus, PencilRuler, FlaskConical, Projector, Users, Brain, CigaretteOff, Plus } from 'lucide-svelte';

  let card_data = [
    { icon: GraduationCap, icon_color: "text-indigo-500", text: "Excellent Academics" },
    { icon: Flower2, icon_color: "text-green-500", text: "Spacious and Green Campus" },
    { icon: Bus, icon_color: "text-slate-500", text: "Transportation Facilities" },
    { icon: PencilRuler, icon_color: "text-sky-500", text: "Extracurricular Activities" },
    { icon: FlaskConical, icon_color: "text-yellow-500", text: "Modern Lab Facilities" },
    { icon: Brain, icon_color: "text-orange-500", text: "Moral Development" },
    { icon: Users, icon_color: "text-purple-500", text: "Bright and Skilled Teachers" },
    { icon: Projector, icon_color: "text-yellow-500", text: "Multimedia Classroom" },
    { icon: CigaretteOff, icon_color: "text-red-500", text: "No Smoking and Politics" },
    { icon: Plus, icon_color: "text-indigo-500", text: "And Much More!" },
  ];

  let slide_images = [
    'https://easyaccount-bpatcsc.easytechsolution.org/upload/upload/slide_1.jpg',
    'https://easyaccount-bpatcsc.easytechsolution.org/upload/upload/slide_2.jpg',
    'https://easyaccount-bpatcsc.easytechsolution.org/upload/upload/slide_4.jpg',
    'https://easyaccount-bpatcsc.easytechsolution.org/upload/upload/slide_5.jpg'
  ];

  let slide_index = 0;

  onMount(() => {
    show_slides();

    function show_slides() {
      let slides = document.getElementsByClassName("slideshow-slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slide_index = (slide_index + 1) % slides.length;
      slides[slide_index].style.display = "block";  
      setTimeout(show_slides, 3000);
    }
  })
</script>

<main>

  <!-- Latest Update -->
  <div class="p-3 flex flex-row justify-center align-middle shadow-[-6px_0px_6px_6px_rgba(0,0,0,0.03)]">
    <div class="flex flex-wrap align-middle items-center gap-3">
      <div class="bg-indigo-500 px-3 py-1.5 text-gray-100 rounded text-sm">
        <Newspaper size={16} class="inline-block mr-1 -mt-0.5"/>Latest
      </div>
      <div class="font-medium">
        <p>(দ্বাদশ শ্রেণি) ৩য় সেমিস্টার পরীক্ষা-২০২৪ এর প্রবেশপত্র সংগ্রহ করে পরীক্ষায় অংশগ্রহণ করতে বলা হলো।</p>
      </div>
    </div>
  </div>

  <!-- Hero Background -->
  <div class="w-full h-96 bg-fixed bg-cover bg-no-repeat relative" style="background-image: url('../src/assets/college.jpg');">
    <div class="absolute h-full w-full bg-gray-200/15"></div>
  </div>

  <!-- Hero Content -->
  <div class="shadow-lg bg-gray-50 p-8 md:p-12 border-t-4 border-slate-500 m-6 md:m-10 relative -mt-36 rounded">
    <div class="lg:flex gap-12 justify-between">
      <div class="lg:w-[55%] relative space-y-12">

        <!-- Image Slideshow -->
        <div class="slideshow-container flex justify-center rounded-lg shadow-lg overflow-hidden">
          {#each slide_images as slide_image}
            <div class="slideshow-slide fade w-full">
              <img src={slide_image} class="h-52 md:h-80 w-full object-cover">
            </div>
          {/each}
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center p-2 gap-6">
          <img src="https://easyaccount-bpatcsc.easytechsolution.org/upload/upload/101.jpg" class="rounded-full h-28 md:h-40">
          <div class="space-y-2">
            <p class="font-semibold text-lg">S M Mehedi Hasan</p>
            <p class="text-sm mb-1">
              Principal (Additional Charge),<br>
              BPATC School & College<br>
              Director,<br>
              BPATC, Savar, Dhaka
            </p>
            <button class="bg-slate-600 rounded-full px-4 py-2 text-gray-100">
              <SquareArrowOutUpRight size={16} class="inline-block mr-1.5 -mt-0.5"/>
              <a href="https://new.bpatcsc.org/website/notice.php" class="text-sm">Principal's Message</a>
            </button>
          </div>
        </div>
      </div>

      <div class="lg:w-[45%] mt-12 lg:mt-0 space-y-12">
        <div class="space-y-3">
          <p class="border-l-4 border-slate-400 pl-2 text-2xl font-semibold mb-2">Overview</p>
          <p class="">
            Situated within the surrounding of BPATC, BPATC School and College is conducted by BPATC under the regulations of BISE under the Education Ministry of the Peoples Republic of Bangladesh. The location and well-disciplined atmosphere are the characteristics of this institution which makes it different from any other institution.
          </p>
          <p>
             We believe that we do and will continue to play an active role to create good citizens and national development.
          </p>
        </div>

        <div>
          <p class="border-l-4 border-slate-400 pl-2 text-2xl font-semibold mb-2">Recent Notice</p>
          <table align="center" class="notice-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23/10/2024</td>
                <td><a href="https://bpatcsc.org/uploads/Seatplan-3rd-Sem-24.pdf">৩য় সেমিস্টার পরীক্ষা-২০২৪ এর আসন বিন্যাস</a></td>
              </tr>
              <tr>
                <td>22/10/2024</td>
                <td><a href="https://bpatcsc.org/uploads/English.pdf">দ্বাদশ শ্রেণীর প্রাক-নির্বাচনী পরীক্ষার ইংরেজি বিষয়ের ইম্পর্টেন্ট কানেক্টরস মিনিং</a></td>
              </tr>
              <tr>
                <td>20/10/2024</td>
                <td><a href="https://bpatcsc.org/uploads/BPATCSC-Scan_000150.pdf">দ্বাদশ শ্রেণির ক্লাসের সময়সূচি (একাদশ শ্রেণির পরীক্ষা চলাকালীন)</a></td>
              </tr>
              <tr>
                <td>08/10/2024</td>
                <td><a href="https://bpatcsc.org/uploads/Bondho-College.pdf">পূজা উপলক্ষ্যে বন্ধ সংক্রান্ত নোটিশ</a></td>
              </tr>
              <tr>
                <td>08/10/2024</td>
                <td><a href="https://bpatcsc.org/uploads/BANGLA.pdf" class="pdf-link">দ্বাদশ শ্রেণির প্রাক-নির্বাচনি পরীক্ষার সিলেবাস-2024</a></td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center">
            <button class="bg-slate-600 rounded-full px-4 py-2 text-gray-100">
              <SquareArrowOutUpRight size={16} class="inline-block mr-1.5 -mt-0.5"/><a href="https://new.bpatcsc.org/website/notice.php" class="text-sm">See all</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lie-filled Flexing -->
  <div class="bg-fixed bg-cover bg-no-repeat" style="background-image: url('../src/assets/college.jpg')">
    <div class="p-16 bg-gray-200/95 flex flex-col items-center">
    <p class="text-3xl font-medium"><span class="border-b-4 border-slate-400">What Makes Us Different</span></p>

    <div class="m-12 flex flex-wrap justify-center gap-6">
      {#each card_data as card, idx}
        <div class="flex flex-col justify-center items-center bg-gray-100 p-6 w-40 h-40 gap-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 duration-100" use:reveal={{ transition: "fly", y:20, duration: 500, delay: 75*idx }}>
          <div><svelte:component this={card.icon} size={52} class="inline-block mr-1.5 -mt-0.5 {card.icon_color}"/></div>
          <div>
            <p class="text-sm text-center">{card.text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  </div>

</main>

<style lang="postcss">
  .notice-table {
    @apply table-auto bg-white shadow-md border-collapse my-6;
  }
  .notice-table thead {
    @apply bg-slate-500 text-gray-100;
  }
  .notice-table td, .notice-table th {
    @apply px-4 py-2;
  }
  .notice-table tr:nth-child(even) {
    @apply bg-slate-100;
  }
  .notice-table td:nth-child(odd) {
    @apply border-r border-slate-200;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {
      opacity: .4;
      transform: translateX(60px);
    } to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
