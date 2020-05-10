<script>
  /**
   * Modal message configuration.
   * @loading           state to show loading progress.
   * @text              message will be show on modal.
   * @buttons           clickable button will show on footer with label, href.
   *                    add style or concat default style with styled.
   * @style             button style will apply to all buttons without style.
   * @dismisible        state to close modal on overlay clicked.
   * @onClick           callback to handle button on clicked
   */
  let config = {}

  // default config
  // always use default config
  // override on modal opening
  let _config = {
    loading: false,
    text: false,
    buttons: [],
    style: 'btn-flat blue-grey-text waves-effect waves-blue-grey',
    dismissible: false,
    onClick: false
  }

  // override with default config
  config = {..._config, config}

  let modalMessage, domModalMessage

  /**
   * Open modal message.
   *
   * @param   Object
   * @return  void
   */
  const open = (modalConfig = {}) => {
    _config = {...config, ...modalConfig}

    if (!modalMessage) {
      modalMessage = M.Modal.init(domModalMessage, {
        dismissible: _config.dismisible
      })
    }

    modalMessage.open()
  }

  /**
   * Click button.
   *
   * @param   Object
   * @return  void
   */
  const clickButton = (buttonConfig) => {
    if (typeof buttonConfig.href !== 'undefined') {
      window.location = buttonConfig.href
    } else if (_config.onClick) {
      _config.onClick(button.label)
    }
  }

  /**
   * Apply button style by requested condition.
   *
   * @param   String
   * @return  String
   */
  const buttonStyle = (buttonConfig) => {
    if (typeof buttonConfig.style !== 'undefined') {
      return buttonConfig.style
    } else if (typeof buttonConfig.styled !== 'undefined') {
      return `${_config.style} ${buttonConfig.styled}`
    } else {
      return _config.style
    }
  }

  export {
    config,
    open
  }
</script>

<div bind:this={domModalMessage} class="modal">
  <div class="modal-content">
    {#if _config.loading}
    <div class="row">
      <div class="col s6 offset-s3 center-align">
        <div class="preloader-wrapper small active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/if}
    {#if _config.text}
    <div class="row">
      <div class="col s12 center-align blue-grey-text text-darken-3">
        {_config.text}
      </div>
    </div>
    {/if}
  </div>
  {#if _config.buttons.length > 0}
  <div class="modal-footer">
    {#each _config.buttons as button, i}
    <a on:click={e => clickButton(button)} class={buttonStyle(button)} href="javascript:void(0)">{button.label}</a>
    {/each}
  </div>
  {/if}
</div>
