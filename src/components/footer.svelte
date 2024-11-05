<script>
  import { Phone, Mail, MapPin } from 'lucide-svelte';
</script>

<div class="bg-gray-700 text-gray-200 text-sm p-6">
  <div class="p-8 md:p-12 lg:p-16 sm:flex justify-evenly items-center align-middle space-y-6 sm:space-y-0">
    <div class="sm:w-1/3 lg:w-1/4 sm:flex flex-row items-center justify-center">
      <img src="assets/bpatcsc.png" class="w-24 h-24 md:w-28 md:h-28">
    </div>

    <div class="sm:w-1/3 lg:w-1/4 sm:flex flex-col items-center justify-center">
      <div>
        <p class="text-xl text-gray-200 font-medium mb-1">Contact Us</p>
        <table class="border-separate border-spacing-y-1">
          <tbody>
            <tr>
              <td><Phone size={16} class="inline-block mr-1 -mt-0.5"/></td>
              <td><a href="tel:+88027747146">(+88) 02-7747146</a></td>
            </tr>
            <tr>
              <td><Mail size={16} class="inline-block mr-1.5 -mt-0.5"/></td>
              <td><a href="mailto:bpatcsc@gmail.com">bpatcsc@gmail.com</a></td>
            </tr>
            <tr>
              <td><MapPin size={16} class="inline-block mr-1.5 -mt-0.5"/></td>
              <td>Bangladesh Public Administration Training Centre, Savar, Dhaka.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  <div class="text-center p-2">
    Unofficial remake of <a href="https://new.bpatcsc.org/" class="underline">bpatcsc.org</a>
    by <a href="https://mehedirm6244.github.io/" class="underline">Mehedi Rahman Mahi</a>
  </div>
</div>