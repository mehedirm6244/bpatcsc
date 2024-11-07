<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  import { MoveRight } from 'lucide-svelte';

  let feedback_messages = [
    {
      name: 'Anonymous',
      message: 'nice and attractive',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeSse3P-yOJRxKDDSnH2VgoxI-AZrklYPkA&s',
    },
    {
      name: 'সকিনা',
      message: 'আমার জীবন বরবাদ কইরা দিছে',
      avatar: 'https://images.indianexpress.com/2018/09/sui-dhaaga-7592.jpg?w=414',
    },
    {
      name: 'ইউসুফ সরকার',
      message: 'নাটক কম করো পিও',
      avatar: 'https://assets.telegraphindia.com/abp/2023/Jul/1690272528_yunus.jpg',
    },
  ];

  let slide_images = [ 'assets/slide_1.jpg', 'assets/slide_2.jpg', 'assets/slide_3.jpg' ];

  let recent_notice = [
    {
      title: '৩য় সেমিস্টার পরীক্ষা-২০২৪ এর ব্যবহারিক পরীক্ষার সময়সূচি (দ্বাদশ শ্রেণি)',
      date: '05 Nov 2024'
    },
    {
      title: 'শ্রী শ্রী শ্যামা পূজা উপলক্ষ্যে বন্ধ সংক্রান্ত নোটিশ',
      date: '30 Oct 2024'
    },
    {
      title: 'প্রতিষ্ঠান হতে দরিদ্র/কল্যাণ তহবিল এ বৃত্তিপ্রাপ্ত শিক্ষার্থীদের ব্যাংক একাউন্ট নম্বর জমাদান সংক্রান্ত',
      date: '30 Oct 2024'
    },
    {
      title: '৩য় সেমিস্টার পরীক্ষা-২০২৪ এর আসন বিন্যাস',
      date: '23 Oct 2024'
    },
    {
      title: 'দ্বাদশ শ্রেণির ক্লাসের সময়সূচি (একাদশ শ্রেণির পরীক্ষা চলাকালীন)',
      date: '20 Oct 2024'
    },
    {
      title: 'দ্বাদশ শ্রেণির প্রাক-নির্বাচনি পরীক্ষার সিলেবাস-2024',
      date: '08 Oct 2024'
    },
  ];
</script>

<main>
  <div class="shadow-md">
    <Splide hasTrack={false} options={{
      type: 'fade',
      autoplay: 'play',
      interval: 6000,
      speed: 2000,
      arrows: false,
      pagination: false,
      resetProgress: false,
      rewind: true,
      pauseOnHover: false
    }}>
      <SplideTrack>
        {#each slide_images as slide_image}
          <SplideSlide>
            <div class="w-full h-80 md:h-96 lg:h-[40vw] bg-cover bg-center" style="background-image: url({slide_image})"></div>
          </SplideSlide>
        {/each}
      </SplideTrack>
    </Splide>
  </div>

  <div class="py-16 md:py-20 px-8 md:px-12 lg:px-20 md:flex align-middle items-center gap-6 relative" use:reveal={{ transition: "slide", x:-20, duration: 500 }}>
    <div class="md:w-1/2 flex justify-center">
      <iframe class="w-11/12 mb-14 md:mb-0 lg:w-[500px] aspect-video rounded" src="https://www.youtube.com/embed/YTTkkAx_-Hc?si=xHx9qX2a-DU5h9fq?autoplay=1&showinfo=0&controls=0" title="BPATCSC" frameborder="0" allow="" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="md:w-1/2 mx-[2%] space-y-4">
      <p class="text-3xl border-l-4 border-sky-500 leading-4 pl-2 text-gray-800" use:reveal={{ transition: "fly", y:20, duration: 500, delay: 250 }}>Overview</p>

      <p use:reveal={{ transition: "fly", y:20, duration: 500, delay: 500 }}>
        Situated within the surrounding of BPATC, BPATC School and College is conducted by BPATC under the regulations of BISE under the Education Ministry of the Peoples Republic of Bangladesh. The location and well-disciplined atmosphere are the characteristics of this institution which makes it different from any other institution.<br>
        We believe that we do and will continue to play an active role to create good citizens and national development.
      </p>

      <div>
        <a href="">
          <button class="text-base text-sky-600" use:reveal={{ transition: "fly", y:20, duration: 500, delay: 750 }}>
            Learn More<MoveRight size={28} strokeWidth={1} class="inline-block -mt-0.5 ml-1"/>
          </button>
        </a>
      </div>
    </div>
  </div>

  <div class="bg-fixed bg-cover bg-no-repeat" style="background-image: url('assets/college.jpg')">
    <div class="py-16 flex flex-col items-center bg-gray-200/95">
      <p class="text-3xl font-medium"><span class="border-b-2 border-indigo-400">Recent Notice</span></p>

      <div class="flex py-12 px-4 sm:px-12 gap-2 items-center justify-center flex-wrap">
        {#each recent_notice as notice, idx}
          <div class="flex gap-5 p-2 items-center justify-center align-middle hover:bg-gray-100 hover:-translate-y-1 hover:shadow-md rounded duration-100" use:reveal={{ transition: "fly", y:20, duration: 500, delay: 100*idx }}>
            <div class="bg-teal-600 text-gray-50 h-[88px] max-w-[88px] p-4 flex flex-none items-center justify-center align-middle rounded">
              <p class="text-center text-sm">{notice.date}</p>
            </div>

            <div class="sm:w-96">
              <a href="" class="text-lg">{notice.title}</a>
            </div>
          </div>
        {/each}
      </div>
      <a href="">
        <button class="text-base text-sky-600" use:reveal={{ transition: "fly", y:20, duration: 500, delay: 500 }}>
          All Notices<MoveRight size={28} strokeWidth={1} class="inline-block -mt-0.5 ml-1"/>
        </button>
      </a>
    </div>
  </div>

  <!-- Yet another lie-filled Flexing -->
  <div class="py-16 bg-gray-100 flex flex-col items-center">
    <p class="text-3xl font-medium"><span class="">Hear from Our Students</span></p>

    <div class="my-6 overflow-hidden w-full">
      <Splide hasTrack={false} options={{
        type: 'loop',
        autoplay: 'play',
        gap: '24px',
        interval: 5000,
        speed: 2000,
        arrows: false,
        pagination: false,
        resetProgress: false,
        pauseOnHover: false
      }}>
        <SplideTrack>
          {#each feedback_messages as feedback}
            <SplideSlide>
              <div class="bg-gray-50 border-t-2 border-sky-500 w-11/12 sm:w-[512px] m-auto mt-12 mb-2 p-8 shadow-md">
                <div class="-mt-16 mb-6 flex justify-center">
                  <img src={feedback.avatar} class="w-20 h-20 rounded-full shadow-md object-cover">
                </div>
                <blockquote class="text-xl sm:text-2xl font-medium mb-4 text-center">{feedback.message}</blockquote>
                <p class="text-sm sm:text-base text-right text-gray-800 font-medium">- {feedback.name}</p>
              </div>
            </SplideSlide>
          {/each}
        </SplideTrack>
      </Splide>
    </div>
  </div>

</main>

<style lang="postcss">
  blockquote:before, blockquote:after {
   @apply text-3xl text-gray-500 align-middle leading-4;
  }

  blockquote:before {
    content: open-quote;
    margin-right: 4px
  }

  blockquote:after {
    content: close-quote;
    margin-left: 3px
  }
</style>
