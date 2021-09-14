function AddPaymet(Addpayment) {
    Addpayment('[data-numeric]').payment('restrictNumeric');
    Addpayment('.cc-number').payment('formatCardNumber');
    Addpayment('.cc-exp').payment('formatCardExpiry');
    Addpayment('.cc-cvc').payment('formatCardCVC');
    Addpayment.fn.toggleInputError = function(erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
    };
    Addpayment('form').submit(function(e) {
    e.preventDefault();
    var cardType = Addpayment.payment.cardType(Addpayment('.cc-number').val());
    Addpayment('.cc-number').toggleInputError(!Addpayment.payment.validateCardNumber(Addpayment('.cc-number').val()));
    Addpayment('.cc-exp').toggleInputError(!Addpayment.payment.validateCardExpiry(Addpayment('.cc-exp').payment('cardExpiryVal')));
    Addpayment('.cc-cvc').toggleInputError(!Addpayment.payment.validateCardCVC(Addpayment('.cc-cvc').val(), cardType));
    Addpayment('.cc-brand').text(cardType);
    Addpayment('.validation').removeClass('text-danger text-success');
    Addpayment('.validation').addClass(Addpayment('.has-error').length ? 'text-danger' : 'text-success');
    });
    };



    // $(function($) {
    //     $('[data-numeric]').payment('restrictNumeric');
    //     $('.cc-number').payment('formatCardNumber');
    //     $('.cc-exp').payment('formatCardExpiry');
    //     $('.cc-cvc').payment('formatCardCVC');
    //     $.fn.toggleInputError = function(erred) {
    //     this.parent('.form-group').toggleClass('has-error', erred);
    //     return this;
    //     };
    //     $('form').submit(function(e) {
    //     e.preventDefault();
    //     var cardType = $.payment.cardType($('.cc-number').val());
    //     $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
    //     $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    //     $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
    //     $('.cc-brand').text(cardType);
    //     $('.validation').removeClass('text-danger text-success');
    //     $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
    //     });
    //     });