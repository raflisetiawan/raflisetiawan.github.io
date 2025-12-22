<script setup lang="ts">
const { global } = useAppConfig()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const subjects = [
  'Project Collaboration',
  'Job Opportunity',
  'Freelance Work',
  'General Inquiry',
  'Other'
]

async function handleSubmit() {
  isSubmitting.value = true

  // Create mailto link with form data
  const mailtoLink = `mailto:${global.email}?subject=${encodeURIComponent(form.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  )}`

  // Open email client
  window.open(mailtoLink, '_blank')

  // Simulate submission delay
  await new Promise(resolve => setTimeout(resolve, 500))

  isSubmitting.value = false
  isSubmitted.value = true

  // Reset form after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }"
    :in-view-options="{ once: true }"
  >
    <UPageSection
      id="contact"
      title="Get In Touch"
      description="Have a project in mind or want to collaborate? Feel free to reach out!"
      :ui="{
        container: 'px-0 !pt-0 gap-6 sm:gap-8',
        title: 'text-left text-2xl sm:text-3xl lg:text-3xl font-bold gradient-text',
        description: 'text-left mt-3 text-base sm:text-lg text-muted'
      }"
    >
      <div class="glass-card p-6 sm:p-8">
        <!-- Success Message -->
        <div
          v-if="isSubmitted"
          class="text-center py-12"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <UIcon
              name="i-lucide-check"
              class="size-8 text-green-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-highlighted mb-2">
            Message Sent!
          </h3>
          <p class="text-muted">
            Thank you for reaching out. I'll get back to you soon!
          </p>
        </div>

        <!-- Contact Form -->
        <form
          v-else
          class="space-y-6"
          @submit.prevent="handleSubmit"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Name -->
            <UFormField
              label="Name"
              name="name"
              required
            >
              <UInput
                v-model="form.name"
                placeholder="Your name"
                size="lg"
                :ui="{
                  root: 'w-full',
                  base: 'bg-white/5 border-white/10 focus:border-violet-500/50'
                }"
                required
              />
            </UFormField>

            <!-- Email -->
            <UFormField
              label="Email"
              name="email"
              required
            >
              <UInput
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                size="lg"
                :ui="{
                  root: 'w-full',
                  base: 'bg-white/5 border-white/10 focus:border-violet-500/50'
                }"
                required
              />
            </UFormField>
          </div>

          <!-- Subject -->
          <UFormField
            label="Subject"
            name="subject"
          >
            <USelect
              v-model="form.subject"
              :items="subjects"
              placeholder="Select a subject"
              size="lg"
              :ui="{
                base: 'bg-white/5 border-white/10 focus:border-violet-500/50'
              }"
            />
          </UFormField>

          <!-- Message -->
          <UFormField
            label="Message"
            name="message"
            required
          >
            <UTextarea
              v-model="form.message"
              placeholder="Tell me about your project or inquiry..."
              :rows="5"
              size="lg"
              :ui="{
                base: 'bg-white/5 border-white/10 focus:border-violet-500/50'
              }"
              required
            />
          </UFormField>

          <!-- Submit Button -->
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <UButton
              type="submit"
              size="lg"
              :loading="isSubmitting"
              class="w-full sm:w-auto btn-gradient shine"
            >
              <template #leading>
                <UIcon
                  name="i-lucide-send"
                  class="size-4"
                />
              </template>
              Send Message
            </UButton>

            <span class="text-sm text-muted">
              or email me directly at
              <a
                :href="`mailto:${global.email}`"
                class="text-violet-400 hover:underline"
              >
                {{ global.email }}
              </a>
            </span>
          </div>
        </form>
      </div>

      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <a
          :href="`mailto:${global.email}`"
          class="glass-card p-5 flex items-center gap-4 hover:border-violet-500/30 transition-all duration-300 group"
        >
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
            <UIcon
              name="i-lucide-mail"
              class="size-6 text-violet-400"
            />
          </div>
          <div>
            <p class="text-sm text-muted">
              Email
            </p>
            <p class="font-medium text-highlighted group-hover:text-violet-400 transition-colors">
              {{ global.email }}
            </p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/rafli-setiawan-820b62227"
          target="_blank"
          class="glass-card p-5 flex items-center gap-4 hover:border-violet-500/30 transition-all duration-300 group"
        >
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <UIcon
              name="i-simple-icons-linkedin"
              class="size-6 text-blue-400"
            />
          </div>
          <div>
            <p class="text-sm text-muted">
              LinkedIn
            </p>
            <p class="font-medium text-highlighted group-hover:text-blue-400 transition-colors">
              Connect with me
            </p>
          </div>
        </a>

        <a
          href="https://github.com/raflisetiawan"
          target="_blank"
          class="glass-card p-5 flex items-center gap-4 hover:border-violet-500/30 transition-all duration-300 group"
        >
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center">
            <UIcon
              name="i-simple-icons-github"
              class="size-6 text-gray-400"
            />
          </div>
          <div>
            <p class="text-sm text-muted">
              GitHub
            </p>
            <p class="font-medium text-highlighted group-hover:text-gray-300 transition-colors">
              View my code
            </p>
          </div>
        </a>
      </div>
    </UPageSection>
  </Motion>
</template>
