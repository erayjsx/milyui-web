---
outline: deep
---

# Modal

A standard modal

Open modal button:

```html
<button data-modal-trigger aria-controls="modal">Open Modal</button>
```

Modal:

```html
<section id="modal" data-modal-target class="hidden">
  <div class="modal-container">
    <div
      data-modal-close
      data-modal-overlay
      tabindex="-1"
      data-class-in="opacity-50"
      data-class-out="opacity-0"
      class="modal-overlay"
    ></div>
    <div
      data-modal-wrapper
      data-class-in="opacity-100 translate-y-0"
      data-class-out="opacity-0 translate-y-5"
      class="modal-wrapper"
    >
      <div class="modal-header">
        <h1 class="modal-title">Title</h1>
        <button
          data-modal-close
          aria-label="Close"
          type="button"
          class="modal-close"
        >
          Close
        </button>
      </div>
      <div class="modal-body">Content</div>
    </div>
  </div>
</section>
```

## Results

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
