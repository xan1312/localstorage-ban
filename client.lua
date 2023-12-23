AddEventHandler('ban', function()
    SendNUIMessage({
        action = 'BanThisNigga',
    })
end)

RegisterNUICallback('dropplayer', function(data)
    TriggerServerEvent('DropPlayer')
end)