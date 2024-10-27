<script>
  import { Mail, Phone } from "lucide-svelte";

  import DropdownMenu from "../components/dropdown.svelte";

  let about_links = [
    { target: "#", caption: "About Us" },
    { target: "#", caption: "Mission and Vision" },
    { target: "#", caption: "Principal's Message" },
    { target: "#", caption: "Governing Body" }
  ];

  let academic_links = [
    { target: "#", caption: "Features" },
    { target: "#", caption: "Rules and Regulations" },
    { target: "#", caption: "Selective Subjects" },
    { target: "#", caption: "Subject Change" },
    { target: "#", caption: "College Dress" },
    { target: "#", caption: "College Identity Card" },
    { target: "#", caption: "Teaching Process" },
    { target: "#", caption: "Examination Process" },
    { target: "#", caption: "Library" },
    { target: "#", caption: "Laboratory" },
    { target: "#", caption: "Transportation" },
    { target: "#", caption: "Others" }
  ];

  let staff_links = [
    { target: "#", caption: "School Section" },
    { target: "#", caption: "College Section" },
    { target: "#", caption: "Office Staff" }
  ];

  let online_service_links = [
    { target: "#", caption: "Online Payments" },
    { target: "#", caption: "Online Result" },
    { target: "#", caption: "Online Admission" },
    { target: "#", caption: "Student Login" },
    { target: "#", caption: "Teacher Login" },
    { target: "#", caption: "Career Opportunities" }
  ];

  let download_links = [
    { target: "#", caption: "Our Android App" },
    { target: "#", caption: "Class Routine" },
    { target: "#", caption: "Academic Calendar" }
  ];
</script>

<!-- Navigation Bar -->
<div class="bg-slate-500 shadow text-gray-200 p-4 sticky top-0 left-0 flex flex-col md:flex-row gap-3 justify-around text-sm z-10">
  <!-- Contact Section (Left) -->
  <div class="space-x-3">
    <a href="tel:+88027747146"><Phone size={16} class="inline-block mr-1 -mt-0.5"/>(+88) 02-7747146</a>
    <a href="mailto:bpatcsc@gmail.com"><Mail size={16} class="inline-block mr-1 -mt-0.5"/>bpatcsc@gmail.com</a>
  </div>

  <!-- Navigation Links (Right) -->
  <div class="space-x-3">
    <DropdownMenu caption="About" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each about_links as about_link}
        <a href={about_link.target} class="block px-4 py-2 hover:bg-gray-300 hover:no-underline">{about_link.caption}</a>
      {/each}
    </DropdownMenu>
    <DropdownMenu caption="Academics" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each academic_links as academic_link}
        <a href={academic_link.target} class="block px-4 py-2 hover:bg-gray-300 hover:no-underline">{academic_link.caption}</a>
      {/each}
    </DropdownMenu>
    <DropdownMenu caption="Teacher & Staff" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each staff_links as staff_link}
        <a href={staff_link.target} class="block px-4 py-2 hover:bg-gray-300 hover:no-underline">{staff_link.caption}</a>
      {/each}
    </DropdownMenu>
    <a href="">Notice</a>
    <DropdownMenu caption="Online Service" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each online_service_links as online_service_link}
        <a href={online_service_link.target} class="block px-4 py-2 hover:bg-gray-300 hover:no-underline">{online_service_link.caption}</a>
      {/each}
    </DropdownMenu>
    <DropdownMenu caption="Download" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each download_links as download_link}
        <a href={download_link.target} class="block px-4 py-2 hover:bg-gray-300 hover:no-underline">{download_link.caption}</a>
      {/each}
    </DropdownMenu>
  </div>
</div>

<!-- Header -->
<div class="flex items-center justify-center gap-5 p-10">
  <img src="../src/assets/bpatcsc.png" class="w-20 h-20 md:w-24 md:h-24">
  <div>
    <p class="text-2xl md:text-3xl font-medium -mb-1">BPATC School and College</p>
    <p class="text-lg md:text-2xl">BPATC, Savar, Dhaka</p>
  </div>
</div>

<style lang="postcss">

</style>
