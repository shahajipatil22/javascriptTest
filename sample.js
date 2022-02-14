let f: (() => void) | null = null

function g() {
  f = () => {}
}

g()

if (f) {
  f() // <- Error: "This expression is not callable 
      //            Type 'never' has no call signatures. (2349)"
}
 function renderOptionData() {
            $('.plugin_option_list .option_wrapper').html(Template.suppressStatusOptions({
                'issues_options': i18next.t('issues.issues_options'),
                'issue_types': i18next.t('issues.issue_types')
            }));
            $('.options_holder').addClass('suppress_status_panel_options');

            $('.parameter_wrapper .parameter_inner_sub_wrapper .issue-options-wrapper').html(Template.suppressStatusFilters({

            }));
        }
