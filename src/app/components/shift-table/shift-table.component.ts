import { Component } from '@angular/core';

@Component({
  selector: 'app-shift-table',
  templateUrl: './shift-table.component.html',
  styleUrls: ['./shift-table.component.scss']
})
export class ShiftTableComponent {
  shiftplan = [
    {
      dayTime: 'Vormittag',
      weekdays: [
        {
          day: 'Montag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Dienstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Mittwoch',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',

            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Donnerstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Freitag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Samstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'

            }
          ]
        },
        {
          day: 'Sonntag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
      ]
    },
    {
      dayTime: 'Nachmittag',
      weekdays: [
        {
          day: 'Montag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Dienstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Mittwoch',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Donnerstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Freitag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Samstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Sonntag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
      ]
    },
    {
      dayTime: 'Nachmittag',
      weekdays: [
        {
          day: 'Montag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Dienstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Mittwoch',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Donnerstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Freitag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Samstag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
        {
          day: 'Sonntag',
          shifts: [
            {
              division: 'Service',
              employe: 'Fabi',
              workingHours: '06:30 - 12:00',
            },
            {
              division: 'Supervision',
              employe: 'Anna',
              workingHours: '06:30 - 12:00'
            },
            {
              division: 'Coach',
              employe: 'Tim',
              workingHours: '06:30 - 12:00'
            }
          ]
        },
      ]
    }
  ]
}
