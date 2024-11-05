<script>
  import { GraduationCap } from "lucide-svelte";
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
<div class="bg-gray-50 shadow-md text-gray-600 p-5 sticky top-0 left-0 flex flex-col lg:flex-row gap-5 justify-around items-center text-sm z-10">
  <!-- Left Section -->
  <div class="flex bg-gray-50 items-center justify-center gap-3">
    <img src="assets/bpatcsc.png" class="w-12 h-12">
    <div>
      <p class="text-lg font-medium -mb-1.5">BPATC School and College</p>
      <p class="text-sm">BPATC, Savar, Dhaka</p>
    </div>
  </div>

  <!-- Navigation Links (Right) -->
  <div class="flex flex-wrap gap-3">
    <DropdownMenu caption="About" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each about_links as about_link}
        <a href={about_link.target} class="block px-4 py-2 hover:bg-gray-200 duration-150 hover:no-underline">{about_link.caption}</a>
      {/each}
    </DropdownMenu>
    <DropdownMenu caption="Academics" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each academic_links as academic_link}
        <a href={academic_link.target} class="block px-4 py-2 hover:bg-gray-200 duration-150 hover:no-underline">{academic_link.caption}</a>
      {/each}
    </DropdownMenu>
    <DropdownMenu caption="Teacher & Staff" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each staff_links as staff_link}
        <a href={staff_link.target} class="block px-4 py-2 hover:bg-gray-200 duration-150 hover:no-underline">{staff_link.caption}</a>
      {/each}
    </DropdownMenu>
    <a href="">Notice</a>
    <DropdownMenu caption="Online Service" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each online_service_links as online_service_link}
        <a href={online_service_link.target} class="block px-4 py-2 hover:bg-gray-200 duration-150 hover:no-underline">{online_service_link.caption}</a>
      {/each}
    </DropdownMenu>
    <DropdownMenu caption="Download" extendClasslist="navbar_dropdown text-gray-700 text-sm">
      {#each download_links as download_link}
        <a href={download_link.target} class="block px-4 py-2 hover:bg-gray-200 duration-150 hover:no-underline">{download_link.caption}</a>
      {/each}
    </DropdownMenu>
    <button class="bg-rose-500 py-2 px-3 -my-2 rounded">
      <a href="#" class="text-white hover:no-underline"><GraduationCap size={16} class="inline-block mr-1 -mt-0.5"/>Admission</a>
    </button>
  </div>
</div>

<style lang="postcss">

</style>
